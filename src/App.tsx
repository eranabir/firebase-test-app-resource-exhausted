import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const initFirebase = async ()=>{
    const firebaseApp = firebase.initializeApp({
       //paste firebase config here
    })
    const firestore = firebaseApp.firestore()
    const getData = async (id: string) => {
        console.log('starting query', id);
        //collection size in db : 10440
        const query = await firestore.collection('supportedAssets').orderBy('id').get()
        console.log(query.docs.length);
        return;
    }
    await getData('1')
}

initFirebase()

function App() {
    return (
      <h1>Firebase Test App for Error : <span style={{color:'red'}}>resource-exhausted</span></h1>
    )
}

export default App


