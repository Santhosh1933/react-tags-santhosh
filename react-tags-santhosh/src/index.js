import React, { useState } from "react";

export const Tags = ({
  tagsBg = "#E2E8F0",
  tagsColor = "black",
  tagsDeleteBg = "#4A5568",
  tagsDeleteColor = "white",
  limit = null,
  duplicate = true,
  setDatas = () => {},
}) => {
  const [arr, setArr] = useState([]);
  const [value, setValue] = useState("");

  const deleteItem = (val) => {
    setArr(arr.filter((data, i) => i !== val));
    setDatas(arr.filter((data, i) => i !== val));
  };

  const styles = {
    tagsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem",
    },
    tagsDelete: {
      backgroundColor: tagsDeleteBg,
      color: tagsDeleteColor,
      height: "1.25rem",
      width: "1.25rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
    },
    tagsTagContainer: {
      display: "flex",
      gap: "0.5rem",
      color: tagsColor,
      backgroundColor: tagsBg,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "0.5rem",
      padding: "0.25rem 0.75rem",
      width: "fit-content",
    },
    tagsGroup: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
      width: "100%",
    },
  };

  return (
    <div style={styles.tagsContainer}>
      <div style={styles.tagsGroup}>
        {arr.map((data, i) => (
          <div key={i} style={styles.tagsTagContainer}>
            <p>{data}</p>
            <button onClick={() => deleteItem(i)} style={styles.tagsDelete}>
              x
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Skill Set ..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (duplicate) {
              if (e.target.value !== "") {
                if (arr.length != limit) {
                  setArr([...arr, e.target.value]);
                  setDatas([...arr, e.target.value]);
                  setValue("");
                }
              }
            } else {
              if (!arr.includes(e.target.value)) {
                if (e.target.value !== "") {
                  if (arr.length != limit) {
                    setArr([...arr, e.target.value]);
                    setDatas([...arr, e.target.value]);
                    setValue("");
                  } else {
                    setValue("");
                  }
                }
              }
            }
          }
        }}
      />
    </div>
  );
};
