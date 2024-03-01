function devideTwoGroups(weights) {
    weights.sort((a, b) => b - a);
    let group1 = [];
    let group2 = [];

    weights.forEach(weight => {
        const sumGroup1 = group1.reduce((sum, w) => sum + w, 0);
        const sumGroup2 = group2.reduce((sum, w) => sum + w, 0);

        if (sumGroup1 <= sumGroup2) {
            group1.push(weight);
        } else {
            group2.push(weight);
        }
    });

    return { group1, group2 };
}

const weights = [1, 2, 3, 4, 5, 6];
const { group1, group2 } = devideTwoGroups(weights);

console.log("Group 1:", group1);
console.log("Group 2:", group2);
