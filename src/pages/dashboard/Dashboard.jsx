import Layout from '../../components/layouts/Layout'
import Products from '../../components/ui/Products'

const Dashboard = () => {
    return (
        <Layout>
            <div className='flex  w-full items-center justify-center text-2xl font-bold text-gray-500'>
             <Products />
            </div>
        </Layout>
    )
}

export default Dashboard
