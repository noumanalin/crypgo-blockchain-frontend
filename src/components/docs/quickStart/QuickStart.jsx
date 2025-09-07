import Border from "../Border"
import Code from "../Code"


const QuickStart = () => {
  return (
    <div id="QuickStart" className="w-full min-h-screen">
      <h1 className="text-2xl font-bold">Quick Start</h1>
      <Border>
        <h1 className="text-xl font-semibold">1. Requirments</h1>
        <p className="text-lg text-accent">Before processing, you need to have the latest stable <span className="text-tertiary">node.js</span></p>
        <br />
        <h2 className="text-xl">Recommanended environment</h2>
        <ul className="list-disc text-lg text-accent pl-5">
          <li>node js 20+</li>
          <li>npm js 10+</li>
        </ul>
      </Border>

      <Border>
        <h2 className="text-xl font-semibold">2. Install</h2>
        <p className="text-lg text-accent">Open package folder and install its dependencies. We recommanded yarn or npm.</p>
        <br />
        <h3 className="text-lg font-semibold">1{')'} Install with npm:</h3>
        <Code>
          <p className=""><span className="text-orange-500">cd</span>{" "} project-folder</p> <br />
          <p>npm install</p>
        </Code>

        <h3 className="text-lg font-semibold">1{')'} Install with yarn:</h3>
        <Code>
          <p className=""><span className="text-orange-500">cd</span>{" "} project-folder</p> <br />
          <p>yarn install</p>
        </Code>
      </Border>

      <Border>
        <h2 className="text-xl font-semibold">3. Start</h2>
        <p className="text-lg text-accent">Once npm install is done now you can run the app.</p>

        <Code>
          <pre>npm run dev or yarn run dev</pre>
        </Code>

        <p className="text-lg text-accent">This command will start a local webserver http://localhost:3000</p>
        <Code>
          <p>{"> "} crypgo_project@0.1.0 dev</p>
          <p>{"> "} next dev</p> <br />
          <p>-Next.js 14.2.4</p>
          <p>-Local: http://localhost:3000</p>
        </Code>
      </Border>


      <Border>
        <h2 className="text-xl font-semibold">4. Build/Deployment</h2>
        <p className="text-lg text-accent">After adding url run below command for build a app.</p>
        <Code>
          npm run build or yarn build
        </Code>
        <p className="text-lg text-accent">Finally, Your website is ready to be deployed. 🥳</p>
      </Border>
    </div>
  )
}

export default QuickStart