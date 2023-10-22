const scroll = new LocomotiveScroll({
    el: document.querySelector('#dada'),
    smooth: true
});
gsap.from(".text",{
    stagger:.3,
    y:10,
    duration:1,
    ease:Power3,
    opacity:0



})
Shery.textAnimate("#grid-h1-span" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  Shery.imageEffect("#ba_da", {
    style: 5,
    config:{"a":{"value":0.99,"range":[0,30]},"b":{"value":-0.87,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":11.207588221796097},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.04,"range":[1,15]},"durationOut":{"value":0.99,"range":[0.1,5]},"durationIn":{"value":1.07,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.26,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.07,"range":[0,10]},"metaball":{"value":0.23,"range":[0,2],"_gsap":{"id":20}},"discard_threshold":{"value":0.56,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.17,"range":[0,2]},"noise_scale":{"value":28.1,"range":[0,100]}},
    
    gooey:true,
    // debug: true,
  });