from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.database import SessionLocal

from app.models.application import (
    Application
)

from app.schemas.application_schema import (
    ApplicationCreate
)

router = APIRouter()


@router.post("/applications")
def create_application(
    payload: ApplicationCreate
):

    db: Session = SessionLocal()

    try:

        application = Application(
            name=payload.name,
            email=payload.email,
            phone=payload.phone,
            college=payload.college,
            current_year=payload.current_year,
            city=payload.city,
            course_id=payload.course_id
        )

        db.add(application)

        db.commit()

        db.refresh(application)

        return {
            "success": True,
            "id": application.id
        }

    finally:
        db.close()