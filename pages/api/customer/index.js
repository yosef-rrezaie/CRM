import Customer from "@/models/customer";
import connectDB from "@/utils/connectDB";
import { useRouter } from "next/router";

export default async function handler(req, res) {
  try {
    connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Erorr in connecting to DB" });
  }

  if (req.method === "POST") {
    const data = req.body.data;
    if (!data.name || !data.email || !data.lastName)
      return res.status(400).json({ status: "failed", message: "InvalidData" });

    try {
      const customer = await Customer.create(data);
      res.status(201).json({ status: "successfully", data: customer });
    } catch (error) {
      return res
        .status(500)
        .json({ status: "failed", message: "Erorr in storing to DB" });
    }
  } else if (req.method === "DELETE") {
    try {
      const { data } = req.body;
      await Customer.findOneAndDelete({ _id: data });
      res.status(200).json({ status: "success"});
      console.log(data);
    } catch (error) {
      return res
        .status(500)
        .json({ status: "failed", message: "Erorr delete customer" });
    }
  }
}
