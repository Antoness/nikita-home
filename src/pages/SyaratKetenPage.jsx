import { Container, Row, Col } from "react-bootstrap"
import FaqComponen from "../components/FaqComponen"

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="fw-bold text-center mb-2">Why Nikita Generator</h1>
            <p className="text-center">Nikita Generator v.2.22.027 QM1 </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
            <p>Nikita generator is currently in version v.2.22.027 QM1 with advanced and futuristic security and integrity that makes it easy to create reports with excel templates that can be customized by users, reports in PDF form. With the flowchart feature which can directly return values ​​in JSON form, it makes it very easy to create APIs quickly and precisely.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
            <h4  className="fw-bold">
              1.Low Code
            </h4>
            <p>Low code is a software development approach that aims to simplify and accelerate the process of building applications. In a low-code development environment, developers use visual interfaces and pre-built components to create software applications with minimal hand-coding.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
            <h4  className="fw-bold">
              2.Cloude Based App
            </h4>
            <p> Cloud-based apps can be accessed from anywhere with an internet connection. Users don't need to install or download software on their local devices, as the application runs on servers in the cloud.Users always have access to the latest features and security patches without manual installations</p>
            </Col>
            </Row>
          <Row className="py-3">
            <Col>
            <h4  className="fw-bold">
              3.Easy To Create and edit
            </h4>
            <p>These apps can easily scale to accommodate growing numbers of users and data because they leverage the cloud's infrastructure, which can be dynamically adjusted to meet demand.  flexibility, accessibility, and convenience for users and organizations. They have become increasingly popular due to their ability to streamline software deployment, reduce IT infrastructure costs, and enable remote work and collaboration.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
            <h4  className="fw-bold">
              4.Customize business template
            </h4>
            <p>A "customizable business template" typically refers to a pre-designed document or digital file that businesses can adapt, modify, and personalize to fit their specific needs. These templates are often used for various purposes within a business, such as creating documents, forms, reports, presentations, or marketing materials.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default SyaratKetenPage