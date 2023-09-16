const EventEmitter=require("events");
const event=new EventEmitter();

// registering for the event to be fired only once


event.on("saymyname",()=>{
    console.log('my name is abuzar asif')
});
event.emit("saymyname");

// create an event emmiter and register a couple of callbacks
event.on("saymyage",()=>{
    console.log(20);
})
event.on("saymyage",()=>{
    console.log(21);
})
event.on("saymyage",()=>{
    console.log(22);
})
event.emit("saymyage");


// registering for the event with callback parameters

event.on("callingtheparameter",(sc,msg)=>{
    console.log(`your error message is ${sc} and file  is   ${msg}`);
})
event.emit("callingtheparameter",200,"ok");