from sqlalchemy import Column, Integer, String, Text, TIMESTAMP
from sqlalchemy.sql import func

from app.database import Base


class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String)

    short_description = Column(Text)

    full_description = Column(Text)

    duration = Column(String)

    fees = Column(String)

    image_url = Column(Text)

    created_at = Column(
        TIMESTAMP,
        server_default=func.now()
    )