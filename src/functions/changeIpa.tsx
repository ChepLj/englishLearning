//TODO: change Ipa

export function rotate(e: any) {
  e.preventDefault();
  const obj = e.target;
  const tooltipText = obj?.dataset.originalTitle;
  const rawArrayAll = tooltipText.split(" ");
  const rawArrayAllIpa = rawArrayAll.filter((word: string) => {
    return word.includes("[") && word.includes("]");
  });
  const sumWithInitial = rawArrayAllIpa.reduce((accumulator: string[], currentValue: string) => {
    return accumulator.concat(currentValue.slice(1, currentValue.indexOf("]")));
  }, []);
  console.log("🚀 ~ rotate ~ sumWithInitial:", sumWithInitial);
  var oldIpa = obj.innerHTML;
  var newIpa = oldIpa;
  var a = eval(obj.id);
  var l = a.length;
  // while (l--) {
  //   newIpa = a.rotate(1)[0];
  //   if (newIpa != oldIpa) break;
  // }
  obj.innerHTML = newIpa;
  return false;
}

//TODO_END: change Ipa
