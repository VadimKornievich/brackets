module.exports = function check(braces, bracesMap) {
  const findPair = (brace) => bracesMap.find((pair) => brace === pair[0])?.[1];
  return !braces.split("").reduce((prev, cur) => {
    if (cur === findPair(prev[prev.length - 1])) {
      prev.pop();
    } else {
      prev.push(cur);
    }
    return prev;
  }, []).length;
};