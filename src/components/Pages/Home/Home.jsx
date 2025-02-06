import Banner from "../../Banner/Banner";
import ToolsTechnologies from "../../ToolsTechnologies/ToolsTechnologies";
import WhatIDo from "../../WhatIDo/WhatIDo";

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <WhatIDo></WhatIDo>
            </section>
            <section>
                <ToolsTechnologies></ToolsTechnologies>
            </section>
        </div>
    );
};

export default Home;