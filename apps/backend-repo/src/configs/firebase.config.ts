import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccountKey from '../../service-account-key.json';
import { getAuth } from 'firebase-admin/auth';

const admin = initializeApp({
  credential: cert(serviceAccountKey as ServiceAccount)
})

const db = getFirestore(admin)
const auth = getAuth(admin)

export { admin, db, auth }