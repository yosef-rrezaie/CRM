import Customer from "@/models/customer";
import connectDB from "@/utils/connectDB";

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
      res.status(201).json({ message: "successfully", data: customer });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ status: "failed", message: "Erorr in storing to DB" });
    }
  }
}
