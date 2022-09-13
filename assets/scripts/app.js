const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
let choosenMaxLifeValue = 100;
let currentMonsterHealth = choosenMaxLifeValue;
let currentUserHealth = choosenMaxLifeValue;

adjustHealthBars(choosenMaxLifeValue);

function attackHandler() {
	let dealtDamage = dealMonsterDamage(ATTACK_VALUE);
	currentMonsterHealth -= dealtDamage;
	const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
	currentUserHealth -= playerDamage;

	if (currentUserHealth < 0 && currentMonsterHealth > currentUserHealth) {
		alert("The Monster Woon!");
	}
}

attackBtn.addEventListener("click", attackHandler);
