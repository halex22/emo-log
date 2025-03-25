import storageService from "./storage-service";

class DataService {

  static instance;
  storageService = storageService

  constructor() {
    if (DataService.instance) {
      return DataService.instance
    }
    DataService.instance = this
    this.daysData = this.storageService.loadData()
  }

  addDay() {
  }

  addEmotionToDay(EmotionData, day) {
    const dayInfo = EmotionData.date
    if (dayInfo) {
      this.daysData[day].push(EmotionData)
    }
    // create un giorno, e poi appendere la data al giorno e por appendere il giorno 
    // this.daysData
    // this.daysData[day].push(EmotionData)
  }

}

const dataService = new DataService()
export default dataService