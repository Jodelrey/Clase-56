//Calculadora
// Propiedades
// resultado (número), inicializa en 0
// Métodos
// sumar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
// restar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
// multiplicar(numero): suma numero a resultado, y actualiza resultado con el valor de dicha operación
// dividir(numero): divide resultado por numero, y actualiza resultado con el valor de dicha operación
// obtenerResultado(): devuelve resultado
// reiniciar(): pone resultado en 0
// Observaciones
// arrojar un error cuando el argumento ingresado no sea un número, con Number.isFinite()
// arrojar un error cuando se intenta dividir por 0

class Calculadora {
    #resultado = 0
    sumar = numero => {
        if(Number.isFinite(numero)){
        this.#resultado += numero
        } else{
            throw new Error("No ha ingresado un numero")
        }
    }
    restar = numero => {
        if(Number.isFinite(numero)){
        this.#resultado -= numero
        } else{
            throw new Error("No ha ingresado un numero")
        }
    }
    multiplicar = numero => {
        if(Number.isFinite(numero)){
        this.#resultado *= numero
        } else{
            throw new Error("No ha ingresado un numero")
        }
    }
    dividir = numero => {
        if(!Number.isFinite(numero)){
            throw new Error("No ha ingresado un numero")
        }
        if(numero === 0){
            throw new Error("No se puede dividir por 0")
        } 
        this.#resultado /= numero    
    }
    obtenerResultado = () => this.#resultado
    reiniciar = () => this.#resultado = 0

}

const calculadora = new Calculadora()

// calculadora.sumar(10)
// calculadora.sumar(5)
// calculadora.restar(2)
// calculadora.dividir(0)
// console.log(calculadora.obtenerResultado())
// console.log(calculadora.reiniciar())


// Auto
// Propiedades
// encendido (booleano), inicializa en false
// velocidad (número), inicializa en 0
// marca (string)
// modelo (número)
// patente (string)
// Constructor
// pide como argumentos marca, modelo, patente y los asigna a sus respectivas propiedades
// Métodos
// arrancar() pone encendido en true
// apagar() pone encendido en false
// acelerar() suma 10 a velocidad y actualiza dicha propiedad
// desacelerar() resta 10 a velocidad y actualiza dicha propiedad
// toString() devuelve un string con la siguiente plantilla ${marca} ${modelo}, patente ${patente}
// Observaciones
// sólo se puede acelerar o desacelerar si el auto se encuentra prendido
// sólo se puede apagar el auto si la velocidad es 0
// la velocidad mínima es 0

class Auto {
    #encendido = false
    #velocidad = 0
    #marca
    #modelo
    #patente
    constructor(marca, modelo, patente){
        this.#marca = marca
        this.#modelo = modelo
        this.#patente = patente
    }
    arrancar = () => this.#encendido = true
    apagar = () => {
        if(this.#velocidad === 0){
        this.#encendido = false
        }
    }
    acelerar = () => {
        if(this.#encendido === true){
            this.#velocidad+=10
        }
    } 
    desacelerar = () => {
        if(this.#encendido === true && this.#velocidad >= 10){
            this.#velocidad-=10
        }
    }
    toString = () => `${this.#marca} ${this.#modelo}, patente ${this.#patente}`

}

const auto = new Auto("vw", "gol", "AAA123")

// auto.arrancar()
// auto.acelerar()
// auto.acelerar()
// auto.acelerar()
// auto.desacelerar()
// auto.desacelerar()
// auto.desacelerar()
// auto.apagar()
// auto.acelerar()
// console.log(auto.toString())

// Televisor
// Propiedades

// encendido (booleano), inicializa en false
// canal (número), inicializa en 0
// canales (número)
// volumen (número), inicializa en 0
// marca (string)
// Constructor

// pide como argumentos marca y canales y los asigna a sus respectivas propiedades
// Métodos

// prender() pone encendido en true
// apagar() pone encendido en false
// verCanalSiguiente() suma 1 a canal y actualiza dicha propiedad
// verCanalAnterior() resta 1 a canal y actualiza dicha propiedad
// cambiarCanal(canal) actualiza la propiedad canal con el valor del parámetro canal
// subirVolumen() suma 1 a volumen y actualiza dicha propiedad
// bajarVolumen() resta 1 a volumen y actualiza dicha propiedad
// toString() devuelve un string como el siguiente ejemplo:

// Televisor Samsung
// - Canales: 100
// - Canal actual: 23
// - Volumen actual: 34
// Observaciones

// solo se puede modificar el canal y el volumen si el televisor se encuentra prendido
// canales representa el máximo de canales posibles. Si se está en el canal máximo o mínimo (0), y se avanza o retrocede, debe dar toda la vuelta. P. ej.: si el canal máximo es 100, se está en el canal 100, y se avanza de canal, debe volver al 0
// solo se puede cambiar a un canal que exista
// el volumen mínimo es 0 y el máximo 100

class Televisor {
    #encendido = false
    #canal = 0
    #canales 
    #volumen = 0
    #marca 
    constructor(marca, canales){
        this.#marca = marca
        this.#canales = canales
    }
    prender = () => this.#encendido = true
    apagar = () => this.#encendido = false
    verCanalSiguiente = () => {
        if(this.#encendido === true){
            if(this.#canal===this.#canales){
            this.#canal = 0
            } else{
                this.#canal += 1
            }
        } 
    }
    verCanalAnterior = () => {
        if(this.#encendido === true){
            if(this.#canal===0){
            this.#canal = this.#canales
            } else{
                this.#canal -= 1
            }
        } 
    }
    cambiarCanal = (canal) => {        
        if(this.#encendido === true && canal<=this.#canales && canal>=0) {
            this.#canal = canal
        }
    }
    subirVolumen = () => {
        if(this.#encendido === true && this.#volumen<100){
            this.#volumen+=1        
        }
    }
    bajarVolumen =() => {
        if(this.#encendido === true && this.#volumen>0){
            this.#volumen-=1        
        }
    }
    toString = () => `Televisor: ${this.#marca}\n
    - Canales: ${this.#canales}\n
    - Canal actual: ${this.#canal}\n
    - Volumen actual: ${this.#volumen}`

}

const televisor = new Televisor(Samsung, 100)

televisor.prender()
