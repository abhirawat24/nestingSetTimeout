setTimeout(() => {
    console.log("Delay 4 second");
    setTimeout(() => {
      console.log("Delay 3 second");
      setTimeout(() => {
        console.log("Delay 2 second");
      }, 2000);
    }, 3000);
  }, 4000);
//The delay of the print in the different lines remains as given.
//The flow of the program goes from line 2 --> 9 --> 4 --> 8 --> 6 --> 7
