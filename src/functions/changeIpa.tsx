//TODO: change Ipa

export function rotate(e: any) {
  e.preventDefault();
  const obj = e.target;
  const tooltipText = obj?.dataset.originalTitle;
  //-- tao mang Ipa --//
  const rawArrayAll = tooltipText.split(" ");
  const rawArrayAllIpa = rawArrayAll.filter((word: string) => {
    return word.includes("[") && word.includes("]");
  });
  //-- Loai bo ky tu thua --//
  const finalArrayIpa = rawArrayAllIpa.reduce((accumulator: string[], currentValue: string) => {
    return accumulator.concat(currentValue.slice(1, currentValue.indexOf("]")));
  }, []);

  //-- Thay doi Ipa --//
  var oldIpa = obj.innerHTML;
  let indexOfOldIpa = finalArrayIpa.indexOf(oldIpa);
  const lengthOfArray = finalArrayIpa.length - 1;
  var newIpa = oldIpa;
  if (indexOfOldIpa < lengthOfArray) {
    newIpa = finalArrayIpa[indexOfOldIpa + 1];
  } else if (indexOfOldIpa == lengthOfArray) {
    newIpa = finalArrayIpa[0];
  }

  obj.innerHTML = newIpa;
  return false;
}

//TODO_END: change Ipa
