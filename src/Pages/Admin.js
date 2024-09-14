import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, Outlet, useLocation } from "react-router-dom";

const Admin = () => {
  const location = useLocation();

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="sidebar bg-dark">
          <Nav className="flex-column p-3">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/admin/blogs"
                active={location.pathname === "/admin/blogs"}
                className={
                  location.pathname === "/admin/blogs" ? "active-link" : ""
                }
              >
                Blogs
              </Nav.Link>
            </Nav.Item>
            <hr className="my-2" /> {/* Divider */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/admin/tutorials"
                active={location.pathname === "/admin/tutorials"}
                className={
                  location.pathname === "/admin/tutorials" ? "active-link" : ""
                }
              >
                Tutorials
              </Nav.Link>
            </Nav.Item>
            <hr className="my-2" /> {/* Divider */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/admin/gallery"
                active={location.pathname === "/admin/gallery"}
                className={
                  location.pathname === "/admin/gallery" ? "active-link" : ""
                }
              >
                Gallery
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        {/* Main Content Area */}
        <Col md={9} className="p-3">
          <Outlet /> {/* Render nested routes here */}
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
