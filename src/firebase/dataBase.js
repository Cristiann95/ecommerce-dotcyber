import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore"
import { app } from "./config";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


const dataBase = getFirestore(app);

export async function getProducts(setCards) {
    const querySnapshot = await getDocs(collection(dataBase, "products"));
    let products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    });

    setCards(products)
}

export async function getProcuctsByCategory(category, setCards) {
    const q = query(collection(dataBase, "products"), where("category", "==", category));

    const querySnapshot = await getDocs(q);

    let products = []

    querySnapshot.forEach((doc) => {
        products.push(doc.data())
    });

    setCards(products)
}

export async function getSingleProduct(id, setDetail) {
    const docRef = doc(dataBase, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        setDetail(docSnap.data());
    } else {
        MySwal.fire('Este artículo no se encuentra');
    }
}


export async function createOrder(order) {
    try {
        const docRef = await addDoc(collection(dataBase, "orders"), order);
        MySwal.fire({
            icon: "success",
            title: "Felicidades!",
            text: `El ID de tu compra es : ${docRef.id} `,
        });
    } catch (e) {
        MySwal.fire(`Hubo un error al enviar los datos: ${e}`);
    }
}

export async function productsByName(setCards, inputValue) {
    const querySnapshot = await getDocs(collection(dataBase, "products"));
    let products = []

    let title = '';
    querySnapshot.forEach((doc) => {
        title = doc.data().title.toLowerCase();
        if (title.includes(inputValue.toLowerCase())) {
            products.push(doc.data())
        }
    })

    setCards(products)
}