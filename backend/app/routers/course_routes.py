from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.course import Course

router = APIRouter()


@router.get("/courses")
def get_courses():

    db: Session = SessionLocal()

    try:
        courses = db.query(Course).all()

        return courses

    finally:
        db.close()