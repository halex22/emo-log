class StorageService {
  static STORAGE_KEY = 'emo-data'
  static instance;

  constructor() {
    if(StorageService.instance) return StorageService.instance
    StorageService.instance = this
  }

  saveData(DataToSave) {
    localStorage.setItem(StorageService.STORAGE_KEY, JSON.stringify(DataToSave))
  }

  loadData() {
    const data = localStorage.getItem(StorageService.STORAGE_KEY)
    return JSON.parse(data)
  }
}

const emoExample = {
  hour: '',
  emoLvl: '', 
  comment: '',
  position: undefined
}

const dayExample = {
  date: new Date()
  // emotions: emoExample[]
}


const storageService = new StorageService()

export default storageService