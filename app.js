let pronoun = ['the', 'our', 'his'];
let adj = ['great', 'big', 'amazing'];
let noun = ['jogger', 'racoon', 'dog', 'merchant', 'driver'];

let domainNames = [];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      domainNames.push(pronoun[i] + adj[j] + noun[k] + '.com');
    }
  }
}

console.log(domainNames);
