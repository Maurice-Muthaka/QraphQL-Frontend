import { useParams } from "react-router-dom";

export default function ChartPage() {

    const { id } = useParams();
    
  return (
    <div className="mt-20">
        {/* <Chart type='full' currency={currency} days={days} id={id} /> */}
    </div>
  );
}
