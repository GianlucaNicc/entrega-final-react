const products = [
    {
      id: "1",
      name: "Purina Pro Plan Adult",
      price: 3000,
      category: "Alimento para Perros",
      img: "/Assest/Purina.png",
      stock: 30,
      description: "Comida para perros Purina Pro Plan Duo Délice con pollo.",
    },
    {
      id: "2",
      name: "Purina Pro Plan Small & Mini",
      price: 2500,
      category: "Alimento para Perros",
      img: "/Assest/purina2.jpg",
      stock: 30,
      description:
        "PRO PLAN®  Razas Pequeñas, una fórmula  concentrada con proteínas (29%) y grasas (17%).",
    },
    {
      id: "3",
      name: "Excellent Adulto",
      price: 2000,
      category: "Alimento para Gatos",
      img: "/Assest/Excellent.jpg",
      stock: 30,
      description:
        "PURINA® Excellent® ADULT CAT, fórmula con proteínas y ácidos grasos omega 3 y 6.",
    },
    {
      id: "4",
      name: "Excellent Kitten",
      price: 1800,
      category: "Alimento para Gatos",
      img: "/Assest/Kitten.jpg",
      stock: 20,
      description:
        "PURINA® Excellent® Gatitos Pollo y Arroz, fórmula  a base de proteínas con calcio y fósforo y con ácidos grasos omega 3 y 6.",
    },
    {
      id: "5",
      name: "Arnes para perro",
      price: 1500,
      category: "Indumentaria y Accesorios",
      img: "/Assest/arnes.jpg",
      stock: 20,
      description:
        "Arnés con 2 puntos de enganche, sobre la espalda y sobre el pecho, para perros que tironean mucho.",
    },
    {
      id: "6",
      name: "Camiseta Argentina",
      price: 1400,
      category: "Indumentaria y Accesorios",
      img: "/Assest/camiseta-argentina.jpg",
      stock: 20,
      description:
        "Camiseta de la Selección Argentina de fútbol con las 3 ESTRELLAS",
    },
    {
      id: "7",
      name: "Comedero para perro",
      price: 1800,
      category: "Indumentaria y Accesorios",
      img: "/Assest/comedero-color.jpg",
      stock: 20,
      description: "Comedero de acero inoxidable con base de goma.",
    },
    {
      id: "8",
      name: "Chaleco Rockero",
      price: 1700,
      category: "Indumentaria y Accesorios",
      img: "/Assest/rock.jpg",
      stock: 25,
      description:
        "Vestí a tu mejor amigo con nuestro chaleco Rocker de cuero ecológico elastizado.",
    },
    {
      id: "9",
      name: "Cama Moises Cueva Small Plush Gato",
      price: 1800,
      category: "Cuchas y Camitas",
      img: "/Assest/cueva-gato.webp",
      stock: 20,
      description: "CAMA MOISES CUEVA PLUSH SMALL.",
    },
    {
      id: "10",
      name: "Cama Cucha Extreme Xl Antidesgarro",
      price: 1800,
      category: "Cuchas y Camitas",
      img: "/Assest/camaXL-perro.webp",
      stock: 20,
      description: "CAMA EXTREME GIANT BRAKKO.",
    },
    {
      id: "11",
      name: "Bolsa De Dormir Cama Saco Paul",
      price: 1800,
      category: "Cuchas y Camitas",
      img: "/Assest/bolsa-domir-gato.webp",
      stock: 20,
      description: "Bolsa De Dormir Paul.",
    },
    {
      id: "12",
      name: "Cama Moisés Antidesgarro Perros",
      price: 1800,
      category: "Cuchas y Camitas",
      img: "/Assest/camaS-perro.webp",
      stock: 20,
      description: "CAMA MOISES ANTIDESGARRO BRAKKO!!.",
    },
    {
      id: "13",
      name: "Pelota Con Soga Resistente Glotoni",
      price: 1200,
      category: "Juguetes",
      img: "/Assest/pelota.webp",
      stock: 15,
      description:
        "Glotoni es una línea de juguetes de caucho natural resistente, enfocados en la diversión y el enriquecimiento ambiental de las mascotas.",
    },
    {
      id: "14",
      name: "Juguete Soga Fun Cancat",
      price: 1100,
      category: "Juguetes",
      img: "/Assest/hueso-soga.jpg",
      stock: 10,
      description:
        "La línea de sogas Fun de CanCat se diseñó para que tu mascota libere su stress mientras juegan en el clásico “tira y afloje”",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductsById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 500);
    });
  };