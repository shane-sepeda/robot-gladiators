var playerName = window.prompt("What is your Demon Slayer's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerSouls = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Black Shadow";
var enemyHealth = 200;
var enemyAttack = 60;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Demon Souls!");

    // Add option to skip fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // Log a resulting message to the console so we know that it worked.
console.log(
    playerName + " has chosen to " + promptFight
)

    // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
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
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight.")
        playerSouls = playerSouls - 2;
    }

    else {
        fight();
    }

    

    window.alert(playerName + " has chosen to skip the fight!");
  } else {
    window.alert("You need to choose a valid option. Try again!");
}
};

fight();