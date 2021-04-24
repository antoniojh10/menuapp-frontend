import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const printApi = () => {
  console.log(baseUrl);
};

export const getCommerces = async () => {
  try {
    const response = await axios.get(`${baseUrl}/stores`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getOneCommerce = async (domainName) => {
  const { data } = await axios.get(
    `${baseUrl}/stores?domainName=${domainName}`
  );
  if (data.length === 0) throw { code: 404, message: "Negocio no encontrado" };
  const commerce = {
    ...data[0],
    image: `${baseUrl}${data[0].logo.url}`,
  };
  commerce.products.map((product) => {
    product.image =
      product.image.length > 0
        ? `${baseUrl}${product.image[0].url}`
        : undefined;
  });
  return commerce;
};
