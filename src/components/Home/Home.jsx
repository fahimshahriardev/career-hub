import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeturedJobs/FeaturedJobs";


const Home = () => {

    const jobs = useLoaderData();
    return (
        <div>
            <div >
                <Banner></Banner>
                <CategoryList></CategoryList>
                <FeaturedJobs jobs={jobs}></FeaturedJobs>
            </div>

        </div>
    );
};

export default Home;