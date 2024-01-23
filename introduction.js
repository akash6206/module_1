what is javascript?

 it is client-side scripting language

    ==> TO change behaviour of a website 
    ==> Dynamic Chnages
    ==> OOP concepts

    OOP => object orieted Programming

    Class 
    Object 

    Object:
    (Physical Entity)
    instance of a class
        Class (Logical )
        ==>
        cow,cat,dog ==> animal
        male,female ==> human

    
    DOCUMENT / WINDOW (objects)



    ==> DOM (Document Object Model)

    obj.method()
    obj.varname (var = tag)
    obj.attributename

    Types:

    1.Internal JS 
    2. External JS

    window.document.write
    document.write

 display in BODY / DOCUMENT / WINDOW
        document.write("");


        DISPLAY IN CONSOLE 
        console.log("");


         Display in ANY TAG

         document.getElementById('d1'); div tag



    four types of pop-pup

     (1)  window.alert("alert");

     (2)  confirm("Are you sure??");

     (3)  prompt("How are you?");

      (4) print();

Operators: 

    1. Assignment (=) (var x=56) Assignment/Intialization

    2. Arithmetic (+,-,*,/,%)  % : mod /modulo/modulus

    x=23,y=45 (x,y:operands)
    
    x+y 

    + : (Binary Op)


    ==> When we perform Arithmetic Op on a number and a string values it will give you an error .

    3. Relational/conditional/Comparison : (<,>,<=,>=,==,!=,===)
    4. Logical (&&(Logical AND ) , || (Logical OR) , ! (Logical NOT))

    &&(Logical AND )

    T T ==> T
    T F ==> F
    F T ==> F
    F F ==> F

    || (Logical OR)

    T T ==> T
    T F ==> T
    F T ==> T
    F F ==> F

    ! (Logical NOT)

    !true ==> false
    !false ==> true

    5. Ternary Op: 

    (condition) ? truePart: falsePart

    6. Increment / Decrement 
    (++) ==> adds 1 (unary Operators)
    (--) ==> less 1

    x=34;
    ++x ==> Pre-increment
    x++ ==> post-increment

variable decleration

var x = 12; // declaration
var x=20; // re-declaration ALLOWED
x= "VAR" // re- assignment ALLOWED
console.log(x)


let y = 12; // declaration
 let y=20; // re-declaration NOT  ALLOWED
y= "LET" // re- assignment ALLOWED
console.log(y)


const z = "CONST"; // declaration
const z=20; // re-declaration NOT ALLOWED
 z= 30 // re- assignment NOT ALLOWED
console.log(z)
    