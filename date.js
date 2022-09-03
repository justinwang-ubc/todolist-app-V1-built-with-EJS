//jshint esversion:6

    // = module.exports

exports.getdate = function(){

  const today = new Date();

  const options ={
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day =today.toLocaleDateString("en-US",options);

  return day;
};

exports.getday = function(){
   const today = new Date();

   const options = {
     weekday: "long"
   };

  let day = today.toLocaleDateString("en-US",options);

  return day;
};
