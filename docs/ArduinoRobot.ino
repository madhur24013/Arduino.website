#include <Wire.h>
#include <MPU6050.h>
#include <AFMotor.h>
#include <NewPing.h>
#include <Servo.h>

// === 🔹 Pin & Sensor Setup ===
#define TRIG_PIN A0 
#define ECHO_PIN A1 
#define MAX_DISTANCE 200  
#define MAX_SPEED 255  
#define BUZZER_PIN 9  
#define VACUUM_MOTOR 10  

// === 🔹 Motor & Sensor Setup ===
NewPing sonar(TRIG_PIN, ECHO_PIN, MAX_DISTANCE);
MPU6050 mpu;
AF_DCMotor motor1(1, MOTOR12_1KHZ);
AF_DCMotor motor2(2, MOTOR12_1KHZ);
AF_DCMotor motor3(3, MOTOR34_1KHZ);
AF_DCMotor motor4(4, MOTOR34_1KHZ);
Servo myservo;  

// === 🔹 Optimized Stuck Detection Variables ===
long lastDistance = 0;
int stuckCounter = 0;

void setup() {
    Serial.begin(9600);  
    Wire.begin();
    mpu.initialize();
    pinMode(BUZZER_PIN, OUTPUT);
    pinMode(VACUUM_MOTOR, OUTPUT);

    myservo.attach(10);  
    myservo.write(90);  
    delay(2000);

    motor1.setSpeed(MAX_SPEED);
    motor2.setSpeed(MAX_SPEED);
    motor3.setSpeed(MAX_SPEED);
    motor4.setSpeed(MAX_SPEED);

    digitalWrite(VACUUM_MOTOR, HIGH);

    Serial.println("🚀 CR7 Vacuum Cleaner – Fully Optimized & Running...");
}

void loop() {
    int distanceFront = readPing();
    Serial.print("Front: "); Serial.println(distanceFront);

    // ✅ **Fixed Stuck Detection**
    if (detectStuck()) {
        Serial.println("⚠️ Stuck Detected! ESCAPING...");
        smartEscape();
    } else {
        moveForward();
    }

    // ✅ **Obstacle Avoidance**  
    if (distanceFront <= 20) {  
        moveStop();
        beep(1, 100);
        moveBackward();
        delay(300);
        moveStop();
        delay(100);

        int distanceRight, distanceLeft;
        
        myservo.write(30);  
        delay(100);
        distanceRight = readPing();
        
        myservo.write(150);  
        delay(100);
        distanceLeft = readPing();
        
        myservo.write(90);  

        if (distanceRight >= distanceLeft) {
            turnRight();
        } else {
            turnLeft();
        }
    }
}

// === 🔹 **Optimized Stuck Detection** ===
bool detectStuck() {
    int newDistance = readPing();

    if (newDistance == lastDistance) {  
        stuckCounter++;
        Serial.print("⏳ Stuck Count: "); Serial.println(stuckCounter);
        
        if (stuckCounter >= 3) {  // **If no movement detected 3 times in a row**
            stuckCounter = 0;
            return true;
        }
    } else {
        stuckCounter = 0;
    }
    
    lastDistance = newDistance;
    return false;
}

/** ✅ **Get ultrasonic sensor distance (Now more stable)** */
int readPing() {
    int cm = sonar.ping_cm();
    if (cm == 0 || cm > MAX_DISTANCE) {  
        delay(50);
        cm = sonar.ping_cm();
    }
    return cm;
}

/** ✅ **Check if robot is tilted (Pipe hitting ground)** */
bool isTilted() {
    int16_t ax, ay, az;
    mpu.getAcceleration(&ax, &ay, &az);
    float angleX = atan2(ay, az) * 180 / PI;

    if (angleX > 25 || angleX < -25) {  
        Serial.println("⚠️ Tilt Detected! ESCAPING...");
        return true;
    }
    return false;
}

// === ✅ **Super-Fast Smart Escape Strategy (Move back, turn, retry)** ===
void smartEscape() {
    Serial.println("🔄 Running Smart Escape!");
    moveBackward();
    delay(500);
    
    turnRight();
    delay(250);

    moveForward();
}

// === ✅ **Movement Functions (MAX_SPEED for everything)** ===
void moveForward() {  
    Serial.println("➡️ Moving Forward");
    motor1.run(FORWARD);
    motor2.run(FORWARD);
    motor3.run(FORWARD);
    motor4.run(FORWARD);
}

void moveBackward() {  
    Serial.println("⬅️ Moving Backward");
    motor1.run(BACKWARD);
    motor2.run(BACKWARD);
    motor3.run(BACKWARD);
    motor4.run(BACKWARD);
}  

void moveStop() { 
    Serial.println("⏹ Stopping Motors");
    motor1.run(RELEASE); 
    motor2.run(RELEASE); 
    motor3.run(RELEASE); 
    motor4.run(RELEASE); 
} 

void turnRight() {  
    Serial.println("↪️ FAST Turning Right");
    motor1.run(FORWARD);  
    motor4.run(FORWARD);
    motor2.run(BACKWARD);
    motor3.run(BACKWARD);
    delay(250);
}

void turnLeft() {  
    Serial.println("↩️ FAST Turning Left");
    motor1.run(BACKWARD);
    motor4.run(BACKWARD);
    motor2.run(FORWARD);
    motor3.run(FORWARD);
    delay(250);
}

// === 🔊 **Beeping Alerts (Faster Beeps)** ===
void beep(int times, int duration) {
    for (int i = 0; i < times; i++) {
        digitalWrite(BUZZER_PIN, HIGH);
        delay(duration);
        digitalWrite(BUZZER_PIN, LOW);
        delay(100);
    }
} 