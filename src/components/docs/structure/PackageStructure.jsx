import { Folder } from "lucide-react";
import Border from "../Border";

const PackageStructure = () => {
  return (
    <div id="PackageStructure" className="">
      <h1 className="text-2xl font-bold mb-4">Package Structure</h1>

      <Border>
        <pre className="text-lg  font-mono leading-6 overflow-hidden  -pre">
{
`Crypgo Tailwind NextJs Template

│──   📂 packages

        ├─ 📂 markdown

        ├─ 📂 public

        ├─ 📂 src

        │   ├─ 📂 app

        │   │  ├─ 📂 (site)   (Contains all the pages)

        │   │  │  ├─ 📂 (auth)

        │   │  │  │  ├─ 📂 signin

        │   │  │  │  ├─ 📂 signup

        │   │  │  ├─ documentation

        │   │  ├─ 📂 api

        │   │  │  │  │  ├─ 📂 auth

        │   │  │  │  │  ├─ 📂 context

        │   │  │  │  ├─ 📂 Context

        │   │  │  │  │  ├─ 📂 authDialogContext.tsx

        │   │  ├─ global.css
        
        │   │  ├─ layout.tsx

        │   │  ├─ not-found.tsx

        │   │  ├─ page.tsx

        │   ├─ 📂 components (All the Components of this template.)

        │   ├─ 📂 styles

        │   ├─ 📂 types

        │   ├─ 📂 utils

        ├─ next.config.mjs

        ├─  postcss.config.mjs

        ├─ package.json

        ├─ tailiwind.config.ts

        ├─ tsconfig.json
`}
        </pre>
      </Border>
    </div>
  );
};

export default PackageStructure;
