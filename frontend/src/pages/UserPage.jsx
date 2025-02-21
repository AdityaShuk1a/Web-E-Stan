import React, { useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { gsap } from 'gsap';
import UserCard from '../components/UserCard';

const UserPage = () => {
    const { user } = useContext(UserContext);
    
    useEffect(() => {
        console.log(user);
    }, [user]);

    const useData = [
        { id: 1, userName: "Chunu", role: "Developer", image: "https://storage.googleapis.com/a1aa/image/KiocZL5C5dwh-QGHJAdWpb_rDPK54AC7Fhw3DXfyd4A.jpg" },
        { id: 2, userName: "Munu", role: "Designer", image: "https://storage.googleapis.com/a1aa/image/hEz28F28_UgLX77alzzBYEUCigoa5pz6LCq2DqPMRsY.jpg" }
    ];

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '1rem' }}>
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '1200px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Select user <span style={{ color: '#6B46C1' }}>{user ? '1/1' : '0/1'}</span></h1>
                        <p style={{ color: '#718096' }}>Add user to the dashboard so they can manage the content</p>
                    </div>
                    <button style={{ color: '#6B46C1', border: '1px solid #6B46C1', borderRadius: '999px', padding: '0.5rem 1rem' }}>Select all</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '1.5rem' }}>
                    {useData.map((data) => (
                        <div style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}>
                            <UserCard key={data.id} user={data} />
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ color: '#718096' }}>You will add {useData.length} users</p>
                    <button style={{ backgroundColor: '#6B46C1', color: 'white', borderRadius: '999px', padding: '0.75rem 1.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>Next step</button>
                </div>
            </div>
        </div>
    );
};

export default UserPage;