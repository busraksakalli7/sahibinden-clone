import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
const { Title, Link } = Typography;

const HousingProjects = ({ projects }) => {
  if (!projects) return null;

  return (
    <div className="projects-wrapper">
       <div className="showcase-header-wrapper">
          <Title level={5} style={{ margin: 0, color: '#333' }}>Konut Projeleri</Title>
          <Link href="#" style={{ fontSize: '12px' }}>Tüm Projeleri göster</Link>
      </div>
      <Divider style={{ margin: '10px 0 20px 0' }} />
      
      <Row gutter={[24, 24]}>
        {projects.map((project) => (
          <Col xs={24} md={12} key={project.id}>
            <div className="project-card">
              <div className="project-img-container">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <a href="#" className="project-title">{project.title}</a>
                <div className="project-location">{project.location}</div>
                <div className="project-footer">
                  <div></div>
                  <div className="delivery-badge">{project.delivery}</div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HousingProjects;