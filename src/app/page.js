'use client'
import Button from "@/components/Button";
import Breadcrumb from "@/components/breadcrumbs/Breadcrumb";
import Table from "@/components/Table";
import global from '@/global.module.css';
import { useState } from "react";
import Condition from "@/components/conditions/Condition";
import Enrich from "@/components/enrich/Enrich";

export default function Home() {
  const [breadActiveCount, setBreadActiveCount] = useState(1)
  const next = () => setBreadActiveCount(prev => prev + 1)
  const [selected, setSelected] = useState([])
  const addSelected = (data) => {
    let updateArray = [...selected];
    if (updateArray.includes(data)) updateArray = updateArray.filter((item) => item !== data);
    else updateArray.push(data);
    setSelected(updateArray)
  }

  return (
    <main style={{ width: '100%', padding: '25px', display: 'flex', gap: '25px', justifyContent: 'center' }}>
      <div style={{ width: '38%', borderRadius: '20px', backgroundColor: '#fff' }}></div>

      {/* right component */}
      <div style={{ width: '58%', borderRadius: '20px', backgroundColor: '#fff', padding: '35px 20px', minHeight: '100%' }}>
        <Breadcrumb list={breadcrumArray} active={breadActiveCount} />
        {breadActiveCount === 1 &&
          <div>
            <Table select={addSelected} getSelected={selected} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px', paddingLeft: '20px' }}>
              <p className={`${global.headingColor}`} style={{ fontWeight: 600 }}>{selected.length} Selected</p>
              <Button title={"Add Selected to Forum"} click={() => { next() }} />
            </div>
          </div>
        }

        {breadActiveCount === 2 &&
          <div>
            <Condition />
            <div>
              <Button title={"Save"} click={() => { next() }} width={'100%'} />
            </div>
          </div>
        }

        {breadActiveCount === 3 &&
          <div>
            <Enrich/>
            <div>
              <Button title={"Save"} click={() => { next() }} width={'100%'} />
            </div>
          </div>
        }
        
      </div>
    </main>
  );
}

const breadcrumArray = [
  "Select Forum Members",
  "Condition AI",
  "Enrich AI"
]