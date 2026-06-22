from sqlalchemy import (
    Column,
    Integer,
    String,
    TIMESTAMP,
    ForeignKey
)

from sqlalchemy.sql import func

from app.database import Base


class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True)

    name = Column(String)

    email = Column(String)

    phone = Column(String)

    college = Column(String)

    current_year = Column(String)

    city = Column(String)

    resume_url = Column(String)

    course_id = Column(
        Integer,
        ForeignKey("courses.id")
    )

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )