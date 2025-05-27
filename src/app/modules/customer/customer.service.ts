import { Customer } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma";

const creatCustomer = async (data: any) => {
  const result = await prisma.customer.create({
    data,
  });
  return result;
};
const getAllCustomer = async () => {
  const result = await prisma.customer.findMany();
  return result;
};
const getCustomerByID = async (
  customerId: string
): Promise<Customer | null> => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });
  return result;
};
const customerUpdateById = async (
  customerId: string,
  data: Partial<Customer>
): Promise<Customer | null> => {
  await prisma.customer.findFirstOrThrow({
    where: {
      customerId,
    },
  });
  const result = await prisma.customer.update({
    where: {
      customerId,
    },
    data,
  });
  return result;
};
const customerDeletedByID = async (customerId: string) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });
  const result = await prisma.customer.delete({
    where: {
      customerId,
    },
  });
  return result;
};

export const customersServices = {
  creatCustomer,
  getAllCustomer,
  getCustomerByID,
  customerUpdateById,
  customerDeletedByID,
};
