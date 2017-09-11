export const CHANGE_MOOD = "CHANGE_MOOD";
export const CHANGE_COLOR = "CHANGE_COLOR";
export const SET_DATE_MOOD = "SET_DATE_MOOD";

export function changeMood(index, newMood) {
  return {
    type: CHANGE_MOOD,
    payload: {
      index,
      mood
    }
  }
}

export function changeColor(index, newColor) {
  return {
    type: CHANGE_COLOR,
    payload: {
      index,
      color
    }
  }
}

export function setDateMood(year, month, date) {
  return {
    type: SET_DATE_MOOD,
    payload: {
      year,
      month,
      date
    }
  }
}
