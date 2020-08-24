const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('What meal is your favorite (eg: dinner, brunch, etc.) ', (answer4) => {
        rl.question('What\'s your favorite thing to eat for that meal? ', (answer5) => {
          rl.question('What sport is your absolute favorite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
console.log(`Your name is ${answer} you like doing ${answer2}, while doing that you listen to ${answer3}. Your favorite meal is ${answer4} and 
your favorte thing to eat is ${answer5}. Your favorite sport is ${answer6} and your superpower is ${answer7}`);
              rl.close();
            })
          })
        })
      })
    })    
  });
});
