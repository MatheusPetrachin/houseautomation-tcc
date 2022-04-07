#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>

const char* ssid = "MatheusNet";
const char* password = "MarteX2020";

IPAddress ip(192,168,15,21);
IPAddress gateway(192,168,15,1);
IPAddress subnet(255,255,255,0);

const int led1 = 4;
const int led2 = 14;
const int led3 = 12;
const int led4 = 13;

ESP8266WebServer server(80);

void pisca(){  
    digitalWrite(led1, 0);
    digitalWrite(led2, 0);
    digitalWrite(led3, 0);
    digitalWrite(led4, 0);
    
    delay(500);
    
    digitalWrite(led1, 1);
    delay(500);
  
    
    digitalWrite(led1, 0);
    digitalWrite(led2, 1);
    delay(500);
  
    digitalWrite(led2, 0);
    digitalWrite(led3, 1);
    delay(500);
  
    digitalWrite(led3, 0);
    digitalWrite(led4, 1);
    delay(500);
  
    digitalWrite(led4, 0);
}

void acendeTodos(){  
  digitalWrite(led1, 1);
  digitalWrite(led2, 1);
  digitalWrite(led3, 1);
  digitalWrite(led4, 1);  
  server.send(200, "text/plain", "Todos os LED's on");
}

void apagaTodos(){  
  digitalWrite(led1, 0);
  digitalWrite(led2, 0);
  digitalWrite(led3, 0);
  digitalWrite(led4, 0);  
  server.send(200, "text/plain", "Todos os LED's off");
}

void handleRoot() {
  server.send(200, "text/plain", "hello from esp8266! (blinking LED)");
  pisca();
}

//ACENDER E APAGAR LEDS
//LED1

void led1_on(){
  server.send(200, "text/plain", "LED on");  
  digitalWrite(led1, 1);
}
void led1_off(){
  server.send(200, "text/plain", "LED off");
  digitalWrite(led1, 0);
}

//LED2

void led2_on(){
  server.send(200, "text/plain", "LED on");
  digitalWrite(led2, 1);
}
void led2_off(){
  server.send(200, "text/plain", "LED off");
  digitalWrite(led2, 0);
}

//LED3

void led3_on(){
  server.send(200, "text/plain", "LED on");
  digitalWrite(led3, 1);
}
void led3_off(){
  server.send(200, "text/plain", "LED off");
  digitalWrite(led3, 0);
}

//LED4

void led4_on(){
  server.send(200, "text/plain", "LED on");
  digitalWrite(led4, 1);
}
void led4_off(){
  server.send(200, "text/plain", "LED off");
  digitalWrite(led4, 0);
}

void setup(void){
  
  //CONFIG LED1
  pinMode(led1, OUTPUT);
  digitalWrite(led1, 0);

  //CONFIG LED2  
  pinMode(led2, OUTPUT);
  digitalWrite(led2, 0);

  //CONFIG LED3
  pinMode(led3, OUTPUT);
  digitalWrite(led3, 0);
  
  //CONFIG LED4
  pinMode(led4, OUTPUT);
  digitalWrite(led4, 0);
  

  //CONFIG CONEX WIFI PETRAHOUSE
  Serial.begin();
  WiFi.begin(ssid, password);
  Serial.println("");

  // ESPERANDO PELA CONEXAO
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print("Conectando ao Wifi.");
    pisca();
  }
  acendeTodos();

  //PRINT DADOS SOBE A REDE
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  //CHAMADA DE OBJETOS
  server.on("/", handleRoot); // what happens in the root
  
  server.on("/1on",led1_on); // turn led on from webpage /on    
  server.on("/1off", led1_off); // turn led off from webpage /off
  
  server.on("/2on",led2_on); // turn led on from webpage /on  
  server.on("/2off", led2_off); // turn led off from webpage /off  
  
  server.on("/3on",led3_on); // turn led on from webpage /on    
  server.on("/3off", led3_off); // turn led off from webpage /off
  
  server.on("/4on",led4_on); // turn led on from webpage /on
  server.on("/4off", led4_off); // turn led off from webpage /off
  
  server.on("/all_on",acendeTodos); // turn led on from webpage /on
  server.on("/all_of", apagaTodos); // turn led off from webpage /off

  //INICIALIZANDO SERVIÇOS/SERVIDOR
  server.begin();
  Serial.println("HTTP server started");
}

void loop(void){

  //CHAMADA DO METODO INICIAL
  server.handleClient();
}
