import prisma from "../../../shared/prisma";

const createBike = async (data: any) => {
  const result = await prisma.bike.create({ data });
  return result;
};
const getALLBike = async () => {
  const result = await prisma.bike.findMany();
  return result;
};
const getBikeByID = async (bikeId: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId,
    },
  });
  return result;
};
export const bikeServices = {
  createBike,
  getALLBike,
  getBikeByID,
};
