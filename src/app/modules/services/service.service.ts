import { ServiceRecord } from "../../../../generated/prisma";
import prisma from "../../../shared/prisma";

const createBikeServicer = async (data: any) => {
  const result = await prisma.serviceRecord.create({
    data,
  });
  return result;
};
const getAllserviceRecord = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};
const getserviceRecordById = async (serviceId: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId,
    },
  });
  return result;
};
const serviceComplete = async (
  serviceId: string,
  data: Partial<ServiceRecord>
): Promise<ServiceRecord | null> => {
  await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId,
    },
  });
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId,
    },
    data: {
      completionDate: data.completionDate
        ? new Date(data.completionDate)
        : new Date(),
      status: "done",
    },
  });
  return result;
};

export const serviceRecordServeics = {
  createBikeServicer,
  getAllserviceRecord,
  getserviceRecordById,
  serviceComplete,
};
