export function calculateScore(game: string): number {
    let rolls: number[] = [];
  
    for (let i = 0; i < game.length; i++) {
      const c = game[i];
      if (c === 'X') {
        rolls.push(10);
      } else if (c === '/') {
        rolls.push(10 - (rolls[rolls.length - 1] || 0));
      } else if (c === '-') {
        rolls.push(0);
      } else {
        rolls.push(parseInt(c));
      }
    }
  
    let score = 0;
    let rollIndex = 0;
  
    for (let frame = 0; frame < 10; frame++) {
      if (rolls[rollIndex] === 10) { // Strike
        score += 10 + (rolls[rollIndex + 1] || 0) + (rolls[rollIndex + 2] || 0);
        rollIndex += 1;
      } else if ((rolls[rollIndex] || 0) + (rolls[rollIndex + 1] || 0) === 10) { 
        score += 10 + (rolls[rollIndex + 2] || 0);
        rollIndex += 2;
      } else {
        score += (rolls[rollIndex] || 0) + (rolls[rollIndex + 1] || 0);
        rollIndex += 2;
      }
    }
  
    return score;
  }