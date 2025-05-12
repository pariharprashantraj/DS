const obj = {
  level1: {
    name: "root",
    level2: {
      age: 30,
      level3: {
        country: "India",
        level4: {
          skills: ["JS", "React"],
          level5: {
            isActive: true,
            level6: {
              salary: 50000,
              level7: {
                languages: {
                  primary: "English",
                  secondary: "Hindi",
                },
              },
            },
          },
        },
      },
    },
  },
};

const flatteningOfObject = (obj, parentKey = "", res = {}) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        flatteningOfObject(obj[key], newKey, res);
      } else {
        res[newKey] = obj[key];
      }
    }
  }
  return res;
};

console.log(flatteningOfObject(obj));
