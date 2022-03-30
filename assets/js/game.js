var playerName = window.prompt("What is your Demon Slayer's name?");
var playerHealth = 200;
var playerAttack = 10;
var playerSouls = 10;


// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Black Shadow", "Amy Android", "Robo Trumble"];
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }

var enemyHealth = 200;
var enemyAttack = 60;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    // Alert players that they are starting the round
    // window.alert("Welcome to Demon's Souls!");

    // Add option to skip fight
    var promptFight = window.prompt("Would you like to ATTACK or DODGE? Enter 'ATTACK' or 'DODGE' to choose.");

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " has chosen to " + promptFight
    )

    // if player choses to fight, then fight
    if (promptFight === "attack" || promptFight === "ATTACK") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      console.log(
          enemyName + " has died! Congratulations!"
      )
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      console.log(
          playerName + " has died!"
      )
      break;

    } 
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
    } 
    else if (promptFight === "dodge" || promptFight === "DODGE") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Dodge attack?");

    if (confirmSkip) {
        window.alert(playerName + " has dodged an attack.")
        playerSouls = playerSouls - 2;
        console.log("playerSouls", playerSouls);
        break;
    }

    // else {
    //     fight();
    // }

    

    window.alert(playerName + " has chosen to skip the fight!");
    } 
    else {
    window.alert("You need to choose a valid option. Try again!");
    }
}
    
};

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

// fight();
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }