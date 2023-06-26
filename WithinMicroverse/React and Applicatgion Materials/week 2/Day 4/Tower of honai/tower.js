// tower of hanoi - part 1
function move(starting, goal) {
    // Find the auxiliary peg (the one that is neither starting nor goal)
    const aux = 6 - starting - goal;
  
    // Generate the steps to move the disks recursively
    function hanoi(n, starting, goal, aux, steps) {
      if (n === 1) {
        steps.push(`${starting}->${goal}`);
      } else {
        hanoi(n - 1, starting, aux, goal, steps);
        steps.push(`${starting}->${goal}`);
        hanoi(n - 1, aux, goal, starting, steps);
      }
    }
  
    // Create an array to store the steps
    const steps = [];
  
    // Call the recursive function to solve the problem
    hanoi(5, starting, goal, aux, steps);
  
    // Return the steps as a string
    return steps.join(' ');
  }
  
  console.log(move(1, 3));
  // Output: 1->2 1->3 2->3
  
  // console.log(move(2, 3));
  // Output: 2->1 2->3 1->3
  // https://github.com/microverse-students/towers-of-hanoi---part-1-jicamargo