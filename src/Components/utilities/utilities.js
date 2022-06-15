
  let fullYear;
  
  /**
   * Gets full year.
   *
   * @return {Number}
   */
  export const getFullYear = () => {
    if (!fullYear) {
      fullYear = new Date().getFullYear();
    }
    return fullYear;
  };
  
 
  
  /**
   * Convert a Firebase timestamp to Date object
   *
   * @param  {Object} firebaseTimeStamp
   * @return {Date}
   */
  export const getDateObject = (firebaseTimeStamp) => {
    if (!firebaseTimeStamp) {
      //console.error("Could not find firebaseTimeStamp for post");
      return "";
    }
    var dateObj = firebaseTimeStamp.toDate();
    return new Date(dateObj.getTime() + dateObj.getTimezoneOffset() * 60000);
  }
  /**
   * Print a Date object to DD-MM-YYY HH:MM
   *
   * @param  {Date} dateObj
   * @return {String}
   */
  export const getDateTime = (dateObj) => {
    if (!dateObj) return "";
    function pad(n) {
      return n < 10 ? "0" + n : n;
    }
    return (
      pad(dateObj.getDate()) +
      "-" +
      pad(dateObj.getMonth()) +
      "-" +
      dateObj.getFullYear() +
      " " +
      pad(dateObj.getHours()) +
      ":" +
      pad(dateObj.getMinutes())
    );
  }
 