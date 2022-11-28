import React from "react";

const TableComponent = ({ length }) => {
  let finalArray;
  const calculate = (length = 10) => {
    const rNForNewspaper = Array.from({ length }, () =>
      Math.floor(Math.random() * 100)
    );
    let rNForNewspaper2 = [];
    let x0 = 27;
    for (let i = 0; i < length; i++) {
      const c = 43;
      const a = 17;
      const m = 100;
      const x1 = (a * x0 + c) % m;
      const r = x1 / m;
      x0 = x1;
      rNForNewspaper2 = [...rNForNewspaper2, x1];
    }
    // console.log(rNForNewspaper2);
    // [93, 77, 49, 45, 43, 32, 49];
    /* Array.from({ length }, () =>
  Math.floor(Math.random() * 100)
); */
    // const typesOfNewsdaysArray = ["Good", "Fair", "Poor"];
    // const typesOfNewsdays = Array.from({ length }, () => {
    //   const temp = Math.floor(Math.random() * 3);
    //   return typesOfNewsdaysArray[temp];
    // });
    const typesOfNewsdays = rNForNewspaper.map((r) => {
      if (r < 36) {
        return "Good";
      } else if (r < 81) {
        return "Fair";
      } else {
        return "Poor";
      }
    });
    /* [
    "Poor",
    "Fair",
    "Fair",
    "Fair",
    "Fair",
    "Good",
    "Fair",
  ]; */
    /* Array.from({ length }, () => {
    const temp = Math.floor(Math.random() * 3);
    return typesOfNewsdaysArray[temp];
  }); */

    const rNDemand = Array.from({ length }, () =>
      Math.floor(Math.random() * 100)
    );

    let rNDemand2 = [];
    let x20 = 87;
    for (let i = 0; i < length; i++) {
      const c = 0;
      const a = 11;
      const m = 100;
      const x21 = (a * x20 + c) % m;
      const r = x21 / m;
      x20 = x21;
      rNDemand2 = [...rNDemand2, x21];
    }
    console.log(rNDemand2);

    // c = 0, a =11, x0 = 87

    // [80, 20, 15, 88, 98, 65, 86];
    /* Array.from({ length }, () =>
    Math.floor(Math.random() * 100)
  ); */

    // demand mesure
    let demand;
    const handleDemand = () => {
      demand = rNDemand2.map((selectDemand, index) => {
        if (typesOfNewsdays[index] === "Good") {
          if (selectDemand < 4) {
            return 40;
          } else if (selectDemand < 9) {
            return 50;
          } else if (selectDemand < 24) {
            return 60;
          } else if (selectDemand < 44) {
            return 70;
          } else if (selectDemand < 79) {
            return 80;
          } else if (selectDemand < 94) {
            return 90;
          } else {
            return 100;
          }
        } else if (typesOfNewsdays[index] === "Fair") {
          if (selectDemand < 11) {
            return 40;
          } else if (selectDemand < 29) {
            return 50;
          } else if (selectDemand < 69) {
            return 60;
          } else if (selectDemand < 89) {
            return 70;
          } else if (selectDemand < 97) {
            return 80;
          } else {
            return 90;
          }
        } else {
          if (selectDemand < 45) {
            return 40;
          } else if (selectDemand < 67) {
            return 50;
          } else if (selectDemand < 82) {
            return 60;
          } else if (selectDemand < 95) {
            return 70;
          } else {
            return 80;
          }
        }
      });
    };
    handleDemand();

    // calculate revenue from sale
    const revenue = demand.map((d) => d * 0.5);

    // calculate loss profit
    const lossProfit = demand.map((d) => {
      if (d > 70) {
        return parseFloat(((d - 70) * 0.17).toFixed(2));
      } else {
        return 0;
      }
    });

    // calculate salvage from sale of scrap
    const salvageSale = demand.map((d) => {
      if (d < 70) {
        return parseFloat(((70 - d) * 0.05).toFixed(2));
      } else {
        return 0;
      }
    });

    // calculate daily profit
    const profit = revenue.map((r, index) => {
      return parseFloat(r - 23.1 - lossProfit[index] + salvageSale[index]);
    });

    finalArray = demand.map((d, i) => {
      return {
        rNForNewspaper: rNForNewspaper2[i],
        typesOfNewsdays: typesOfNewsdays[i],
        rNDemand: rNDemand2[i],
        demand: d,
        revenue: revenue[i],
        lossProfit: lossProfit[i],
        salvageSale: salvageSale[i],
        profit: profit[i],
      };
    });
  };
  calculate(length);
  return (
    <>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table className="min-w-full text-center">
                <thead className="border-b bg-gray-800 text-white">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Day
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      RD Newspaper
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Newsdays
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      RD Demand
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Demand
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Revenue
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Loss
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Scrap
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Profit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {finalArray.map((f, i) => (
                    <tr key={i} className="bg-white border-b">
                      <td className="text-sm text-black-500 font-normal px-6 py-4 whitespace-nowrap">
                        {i + 1}
                      </td>
                      <td className="text-sm text-black-500 font-normal px-6 py-4 whitespace-nowrap">
                        {f.rNForNewspaper}
                      </td>
                      <td className="text-sm text-black-500 font-normal px-6 py-4 whitespace-nowrap">
                        {f.typesOfNewsdays}
                      </td>
                      <td className="text-sm text-black-500 font-normal px-6 py-4 whitespace-nowrap">
                        {f.rNDemand}
                      </td>
                      <td className="text-sm text-black-500 font-normal px-6 py-4 whitespace-nowrap">
                        {f.demand}
                      </td>
                      <td className="text-sm text-black-500 font-normal px-6 py-4 whitespace-nowrap">
                        {f.revenue}
                      </td>
                      <td className="text-sm text-black-500 font-normal px-6 py-4 whitespace-nowrap">
                        {f.lossProfit}
                      </td>
                      <td className="text-sm text-black-500 font-normal px-6 py-4 whitespace-nowrap">
                        {f.salvageSale}
                      </td>
                      <td className="text-sm text-black-500 font-normal px-6 py-4 whitespace-nowrap">
                        {f.profit.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableComponent;
