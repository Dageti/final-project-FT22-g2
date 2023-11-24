"""empty message

Revision ID: cf5e2c4587e8
Revises: 14cd4b481e0b
Create Date: 2023-11-23 22:03:34.824672

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cf5e2c4587e8'
down_revision = '14cd4b481e0b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('historial_login',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('users_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['users_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    with op.batch_alter_table('UserLogin', schema=None) as batch_op:
        batch_op.add_column(sa.Column('email', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('password', sa.String(length=80), nullable=False))
        batch_op.create_unique_constraint(None, ['email'])

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_constraint('users_lastName_key', type_='unique')
        batch_op.drop_constraint('users_name_key', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.create_unique_constraint('users_name_key', ['name'])
        batch_op.create_unique_constraint('users_lastName_key', ['lastName'])

    with op.batch_alter_table('UserLogin', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('password')
        batch_op.drop_column('email')

    op.drop_table('historial_login')
    # ### end Alembic commands ###
